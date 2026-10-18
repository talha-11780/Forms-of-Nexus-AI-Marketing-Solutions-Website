function FormError({ error }) {
  if (!error) return null;

  return (
    <div className="text-danger small mt-1" role="alert">
      {error.message}
    </div>
  );
}

export default FormError;
