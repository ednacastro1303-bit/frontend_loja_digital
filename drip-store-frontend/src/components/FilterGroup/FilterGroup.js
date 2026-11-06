const FilterGroup = ({ title, inputType, options }) => {
  return (
    <div className="mb-4">
      <h5 className="text-dark-gray-2" style={{ fontSize: '16px', marginBottom: '16px' }}>
        {title}
      </h5>
      <hr className="border border-light-gray-2" style={{ marginBottom: '16px' }} />
      <div>
        {options.map((option, index) => (
          <div key={index} className="form-check mb-2">
            <input 
              className="form-check-input" 
              type={inputType} 
              id={`option-${index}`} 
              style={{
                width: '22px',
                height: '22px',
                backgroundColor: '#C92071',
                border: 'none',
                cursor: 'pointer'
              }}
            />
            <label 
              className="form-check-label ms-2 text-dark-gray-2" 
              htmlFor={`option-${index}`}
              style={{ fontSize: '14px' }}
            >
              {option.text}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterGroup;
