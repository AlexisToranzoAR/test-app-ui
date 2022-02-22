import TextField from "@mui/material/TextField";

export default function MyTextField({
  id,
  label,
  type = "text",
  style,
  formik,
  variant = "outlined",
  color,
  disabled,
  fullWidth,
  size,
  placeholder,
  rows,
  multiline
}) {
  return (
    <TextField
      id={id}
      label={label}
      value={formik?.values[id]}
      onChange={formik?.handleChange}
      type={type}
      variant={variant}
      color={color}
      disabled={disabled}
      error={!!formik?.errors[id]}
      fullWidth={fullWidth}
      size={size}
      style={style}
      placeholder={placeholder}
      multiline={multiline}
      rows={rows}
    />
  );
}
