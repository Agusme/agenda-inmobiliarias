export const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? "font-bold text-primary !bg-gray-50"
    : "text-blue-950 font-semibold hover:text-primary hover:!bg-gray-100";
