import { prisma } from "@/lib/db";
import { Button } from "@/components/ui/button";

const Page = async () => {
  const users = await prisma.user.findMany();
  return (
    <div>
      <Button variant="destructive">
        {JSON.stringify(users, null, 4)}
      </Button>
    </div>
  )
}

export default Page;