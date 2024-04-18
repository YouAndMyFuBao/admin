import { getEnquiry } from '@/api/getEnquiry';
import { useQuery } from '@tanstack/react-query';

const useEnquiryData = () => {
  return useQuery({
    queryKey: ['enquiry'],
    queryFn: getEnquiry,
  });
};

export default useEnquiryData;
