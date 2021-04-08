export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000/rest"
    : "/rest";

export const CHART_SYMBOLS = [
  "circle",
  "square",
  "triangle",
  "diamond",
  "arrow"
];

export const MENU_LABELS = {
  HOME: "Country Information"
};
