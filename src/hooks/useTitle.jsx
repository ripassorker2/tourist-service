import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} tourist service `;
  }, [title]);
};
export default useTitle;
