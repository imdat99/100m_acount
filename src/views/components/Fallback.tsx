import { cn } from "@/lib/utils";

// Different styles based on component type
const styles = {
    content: {
      container: 'w-full p-6 bg-gray-50 rounded-lg border border-gray-200',
      icon: 'w-10 h-10 text-gray-400',
      title: 'text-lg font-medium text-gray-900 mt-4',
      message: 'text-base text-gray-500 mt-2'
    },
    image: {
      container: 'w-full aspect-video bg-gray-100 rounded-lg flex items-center justify-center',
      icon: 'w-12 h-12 text-gray-400',
      title: 'text-base font-medium text-gray-700 mt-3',
      message: 'text-sm text-gray-500 mt-1'
    },
    avatar: {
      container: 'w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center',
      icon: 'w-6 h-6 text-gray-400',
      title: 'sr-only',
      message: 'sr-only'
    }
  };
interface FallbackComponentProps {
    type?: keyof typeof styles;
    text?: string;
    isLoading?: boolean;
}
const FallbackComponent: React.FC<FallbackComponentProps> = ({ type = 'content', text = 'Loading...', isLoading = true }) => {
  const currentStyle = styles[type] || styles.content;

  if (isLoading) {
    return (
      <div className={cn("animate-pulse", currentStyle.container)}>
        {type === 'avatar' ? (
          <div className="w-full h-full rounded-full bg-gray-300"></div>
        ) : (
          <>
            <div className="flex-1 space-y-4">
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-300 rounded"></div>
                <div className="h-4 bg-gray-300 rounded w-5/6"></div>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }

  return (
    <div className={currentStyle.container}>
      <svg className={currentStyle.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
      <h3 className={currentStyle.title}>Content Unavailable</h3>
      <p className={currentStyle.message}>{text}</p>
    </div>
  );
};

export default FallbackComponent;