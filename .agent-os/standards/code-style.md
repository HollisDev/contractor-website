# Code Style Standards

## General Formatting
- **Indentation**: 2 spaces (no tabs)
- **Line Length**: 80-100 characters max
- **Semicolons**: Always use semicolons
- **Quotes**: Single quotes for strings, double for JSX

## TypeScript Style
- **Variables**: camelCase
- **Components**: PascalCase
- **Constants**: UPPER_SNAKE_CASE
- **Interfaces**: PascalCase with 'I' prefix optional
- **Types**: PascalCase with 'T' prefix optional

## Component Structure
```typescript
interface ComponentProps {
  title: string;
  optional?: boolean;
}

export const Component: React.FC<ComponentProps> = ({ 
  title, 
  optional = false 
}) => {
  return (
    <div className="component-wrapper">
      <h1>{title}</h1>
    </div>
  );
};
```

## File Organization
- **Components**: `/components/[category]/ComponentName.tsx`
- **Pages**: `/app/[route]/page.tsx` (App Router)
- **Utilities**: `/lib/utils.ts`
- **Types**: `/types/index.ts`
- **Hooks**: `/hooks/use[HookName].ts`

## CSS/Tailwind Conventions
- **Class Order**: Layout → Display → Spacing → Colors → Typography
- **Responsive**: Mobile-first breakpoints
- **Custom Classes**: Minimize, prefer Tailwind utilities
- **Dark Mode**: Use `dark:` prefix consistently

## Import Order
1. React/Next.js imports
2. Third-party libraries
3. Internal components
4. Utilities and types
5. Relative imports

## Comments
- **JSDoc**: For all exported functions/components
- **Inline**: Explain complex logic only
- **TODO**: Use for future improvements
