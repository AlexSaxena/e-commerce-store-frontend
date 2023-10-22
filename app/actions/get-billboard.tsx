import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`

const getBillboard = async (id: string): Promise<Billboard> => {
    const res = await fetch(`https://e-commerce-store-dashboard-git-billboard-jtts-projects.vercel.app/api/4d1875a7-1a5a-42d1-a9c1-ffa1b78bba20/billboards/${id}`)
    return res.json()
};

export default getBillboard;