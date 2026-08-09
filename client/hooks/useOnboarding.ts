import { QUERY_KEYS } from "@/constants";
import { organizationService } from "@/services";
import { useQuery } from "@tanstack/react-query";

export const useOnboarding = () => {
  return useQuery({
    queryKey: QUERY_KEYS.organization.onboarding,
    queryFn: organizationService.onboarding,
  });
};
