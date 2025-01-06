"use server"

import { useAuth } from "@clerk/nextjs";
import prisma from "../lib/prisma";

class UserNotFoundErr extends Error {}

export async function GetFormStats() {
    const user = useAuth();
    if (!user) {
        throw new UserNotFoundErr()
    }

    const stats = await prisma.form.aggregate({
        where: {
            userId: user,
        },
        _sum: {
            visits: true,
            submissions: true
        }
    })

    const visits = stats._sum.visits || 0;
    const submissions = stats._sum.submissions || 0;

    let submissionRate = 0;

    if (visits > 0) {
        submissionRate = (submissions / visits) * 100; 
    }
}