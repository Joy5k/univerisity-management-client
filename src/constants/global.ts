export const monthsNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const bloodGroups = [
  "A",
  "B",
  "AB",
  "O",
  "A+",
  "A-",
  "B+",
  "B-",
  "AB+",
  "AB-",
  "O+",
  "O-",
];
export const genders=['Male', 'Female', 'Other']
export const bloodGroupOptions = bloodGroups.map((blood) => ({
  value: blood,
  label: blood,
}));
export const genderOptions = genders.map((gender) => ({
  value: gender.toLowerCase(),
  label: gender,
}))
export const monthsOptions = monthsNames.map((month) => ({
  value: month,
  label: month,
}));
