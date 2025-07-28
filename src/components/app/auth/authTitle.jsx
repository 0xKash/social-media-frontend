import { Card, CardTitle } from "@/components/ui/card";

export function AuthTitle() {
  return (
    <Card className="w-full max-w-sm bg-back flex justify-center items-center mb-5">
      <CardTitle className="flex items-center gap-3 text-3xl ">
        <svg
          width="40"
          height="40"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <rect width="200" height="200" rx="30" fill="#111111" />
          <text
            x="50%"
            y="55%"
            textAnchor="middle"
            fill="white"
            fontSize="120"
            fontFamily="Segoe UI, sans-serif"
            fontWeight="600"
            dy=".35em"
          >
            K
          </text>
        </svg>
        Kash.social
      </CardTitle>
    </Card>
  );
}
