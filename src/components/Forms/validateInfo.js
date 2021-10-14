export default function validateInfo(values) {
    let errors = {};
  
    if (!values.year) {
      errors.year = 'Year required';
    }
  
  
    if (!values.make) {
      errors.make = 'Make required';
    } 
    if (!values.model) {
        errors.model = 'Model required';
      }
    
    if (!values.trim) {
      errors.trim = 'Trim is required';
    } 
  
    if (!values.charge_time) {
      errors.charge_time = 'Charge Time is required';
    } 
    if(!values.max_km){
        errors.max_km = 'Maximum km per charge is required';
    }
    if(!values.fuel_consumption){
        errors.fuel_consumption = 'Fuel consumption is required'
    }else if (/^[A-Za-z]+/.test(values.fuel_consumption)) {
        errors.fuel_consumption = 'Enter a valid number';
        }
    if(!values.warranty){
        errors.warranty = 'Warranty data is required'
    } 
    
    return errors;
  }