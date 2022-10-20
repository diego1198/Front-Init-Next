export enum AlertTypeEnum {
  Success = "success",
  Danger = "danger",
  Warning = "warning",
  Info = "info",
}

export const AlertType: Record<AlertTypeEnum, string> = {
  [AlertTypeEnum.Success]: "alert-success",
  [AlertTypeEnum.Danger]: "alert-danger",
  [AlertTypeEnum.Warning]: "alert-warning",
  [AlertTypeEnum.Info]: "alert-info",
};
