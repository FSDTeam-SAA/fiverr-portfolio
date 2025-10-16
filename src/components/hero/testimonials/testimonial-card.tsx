import { Star } from 'lucide-react';

const TestimonialCard = () => {
  return (
    <div className="max-w-md p-6 bg-white rounded-lg shadow-sm border border-gray-100 font-sans">
      {/* Quote Text */}
      <p className="text-gray-700 text-base leading-relaxed mb-4 italic">
        It was great working with Gazi! I hope to work with him in the future as well. Great coders.
      </p>
      
      {/* Author Info */}
      <div className="mb-3">
        <div className="font-semibold text-gray-900 text-base">Zubeiri Aman</div>
        <div className="text-gray-600 text-sm mt-1">CEO</div>
      </div>
      
      {/* Star Rating */}
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className="w-5 h-5 fill-amber-400 text-amber-400"
            strokeWidth={0}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;