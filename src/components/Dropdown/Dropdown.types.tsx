export interface DropdownProps {
    options: string[];
    disabled?: boolean;
    onSelect: (option: string) => void;
  }