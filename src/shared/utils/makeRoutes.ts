import { environment } from "../../environment/environment";

export const makeRoutes = (route: string) => `${environment.apiUrl}${route}`;
