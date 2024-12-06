export interface SelectProps {
    category: string;
    handleCategoryChange: any;
    errors: {
        category: string | null;
    }
}