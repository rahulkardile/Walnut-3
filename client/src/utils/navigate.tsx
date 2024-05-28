/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/rules-of-hooks */
import { useNavigate } from "react-router-dom";

const Navigate = useNavigate();

export const navigate = (link: string) => {
  Navigate(link);
};
