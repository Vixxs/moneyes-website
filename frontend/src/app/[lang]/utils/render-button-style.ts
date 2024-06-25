export function renderButtonStyle(type: string) {
  switch (type) {
    case "primary":
      return "rounded-full px-6 py-3 text-md font-semibold bg-primary text-white";
    case "secondary":
      return "rounded-full px-6 py-3 text-md font-semibold border bg-white text-dark-purple";
    default:
      return "rounded-full px-6 py-3 text-md font-semibold bg-violet-400 text-gray-900";
  }
}
