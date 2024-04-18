import { getMission } from "@/api/getMission";
import { useQuery } from "@tanstack/react-query";

const useMissionData = () => {
    return useQuery({
        queryKey: ['mission'],
        queryFn: getMission,
    });
}

export default useMissionData;