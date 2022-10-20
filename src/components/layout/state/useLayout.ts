import { useAppSelector } from "../../../store/hooks/storeHook";

export const useLayout = () => {
  const { isAuthenticated } = useAppSelector((state) => state.user);

  return { isAuthenticated };
};
