import React, { useEffect, useState } from "react";

import debounce from "lodash.debounce";
import styled from "styled-components";

import { getFilteredPayments } from "../../../../api/payment";
import {
  paymentMethods,
  currencyCodes,
  status,
  processors,
  initialFilterValues,
} from "./utils/filtersOptions";

const FilterCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 50px;
  background: white;
  min-width: 60%;
  height: auto;
  padding: 0.7rem 1rem;
  padding-left: 1.5rem;
  margin-bottom: 1rem;
  box-shadow: 0 1px 3px 0 rgb(0 0 0/0.1);

  input,
  select {
    border: none;
    color: purple;
    background: #efefef;
    outline: none;
    padding: 0.2rem 0;
    border-radius: 5px;
    width: fit-content;
  }

  input {
    width: 180px;
    padding: 8px;
  }

  .form-group {
    margin-right: 1rem;
    label {
      margin-right: 0.3rem;
    }
  }

  @media (max-width: 768px) {
    display: grid;
    width: 92%;
    border-radius: 5px;
    padding: 1rem 1rem;
    gap: 0.7rem;
    input {
      width: 100%;
    }
  }
`;

export const CustomSelect = ({ label, options, value, onChange }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <select onChange={onChange} value={value}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export const CustomLine = styled.div`
  border-left: 1px solid #efefef;
  height: 100%;
  margin-right: 1rem;
`;

function Filters({ setTransactions, setIsLoading }) {
  const [filterValues, setFilterValues] = useState(initialFilterValues);

  const getPayments = (filterValues) => {
    const matchedValues = {
      processor: filterValues.processor,
      payment_instrument_type: filterValues.paymentMethod,
      status: filterValues.currentStatus,
      currency_code: filterValues.currencyCode,
      order_id: filterValues.referenceId,
    };
    setIsLoading(true);
    getFilteredPayments(matchedValues).then(({ data, cancelPrevQuery }) => {
      if (cancelPrevQuery) return;
      setTransactions(data);
      setIsLoading(false);
    });
  };

  const handleOptionChange = (event, optionName) => {
    setFilterValues((filterValues) => ({
      ...filterValues,
      [optionName]: event.target.value,
    }));
    if (optionName === "referenceId") {
      debounce(
        () =>
          getPayments({ ...filterValues, [optionName]: event.target.value }),
        500
      )();
    } else {
      getPayments({ ...filterValues, [optionName]: event.target.value });
    }
  };

  useEffect(() => {
    setFilterValues(initialFilterValues);
  }, []);

  return (
    <FilterCard>
      <div className="form-group">
        <input
          onChange={(e) => handleOptionChange(e, "referenceId")}
          value={filterValues.referenceId}
          autoFocus={true}
          placeholder="Search by your reference"
        />
      </div>
      <CustomLine />
      <CustomSelect
        label="Processor"
        onChange={(e) => handleOptionChange(e, "processor")}
        value={filterValues.processor}
        options={processors}
      />
      <CustomSelect
        label="Payment method"
        onChange={(e) => handleOptionChange(e, "paymentMethod")}
        value={filterValues.paymentMethod}
        options={paymentMethods}
      />
      <CustomSelect
        label="Current status"
        onChange={(e) => handleOptionChange(e, "currentStatus")}
        value={filterValues.currentStatus}
        options={status}
      />
      <CustomSelect
        label="Currency"
        onChange={(e) => handleOptionChange(e, "currencyCode")}
        value={filterValues.currencyCode}
        options={currencyCodes}
      />
    </FilterCard>
  );
}

export default Filters;
