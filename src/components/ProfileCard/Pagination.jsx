import { Button, Stack, Typography } from "@mui/material";
import React from "react";

const Pagination = ({ isLoading, page, totalPage, onPrev, onNext }) => {
  const prevDisabled = page === 1;
  const nextDisabled = page === totalPage;
  return (
      <Stack
        px={10}
        py={1}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Button disabled={prevDisabled} onClick={onPrev}>
          Prev
        </Button>
        <Typography>
          Page {page} of {totalPage}
        </Typography>
        <Button disabled={nextDisabled} onClick={onNext}>
          Next
        </Button>
      </Stack>
  );
};

export default Pagination;
