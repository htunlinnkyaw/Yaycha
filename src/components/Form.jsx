import { useRef } from "react";
import { Box, TextField, Button } from "@mui/material";

export default function Form({ add }) {
  const contentRef = useRef();

  const handleForm = (e) => {
    e.preventDefault();
    const content = contentRef.current.value;
    add(content, "Alice");
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleForm}>
      <Box sx={{ mb: 4, textAlign: "right" }}>
        <TextField
          inputRef={contentRef}
          type="text"
          placeholder="Content"
          fullWidth
          multiline
          sx={{ mb: 1 }}
        />
        <Button variant="contained" type="submit">
          Post
        </Button>
      </Box>
    </form>
  );
}
