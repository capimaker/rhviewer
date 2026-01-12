"use client"

import { Calendar, FlaskConical, Home, Inbox, ScrollText, Search, Settings, WalletCards } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Logo, StripeDialogPayment } from "@/componentes/Shared"
import { BtnCreateInterview } from "@/componentes/Shared/BtnCreateInterview"
import { AccessStatus } from "./AccessStatus"
import { useEffect, useState } from "react"
import axios from "axios"

const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: Home,
  },
  {
    title: "Interviews",
    url: "#",
    icon: FlaskConical,
  },
  {
    title: "All Interviews",
    url: "#",
    icon: ScrollText,
  },
  {
    title: "Payments",
    url: "#",
    icon: WalletCards,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

export function AppSidebar() {

   const [hasPaid, setHasPaid] = useState<boolean | null>(null);
  const [hasUsedFreeTrial, setHasUsedFreeTrial] = useState<boolean | null>(null);

  useEffect(() => {
    const fetchUserStatus = async () => {
      try {
        const res = await axios.get('/api/user/status')
        setHasPaid(res.data.hasPaid)
        setHasUsedFreeTrial(res.data.hasUsedFreeTrial)
      }catch(error){
        console.error("Error", error)
      }
    };
    fetchUserStatus()
  }, [])

  return (
    <Sidebar className="text-white">
      <SidebarHeader />
      <Logo />
      <SidebarContent>
        <SidebarGroup>
          {(hasPaid || !hasUsedFreeTrial) && <BtnCreateInterview/>}
          {!hasPaid && hasUsedFreeTrial && <StripeDialogPayment/>}

        </SidebarGroup>
        <SidebarGroup>
         {/*<SidebarGroupLabel></SidebarGroupLabel>*/}
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild size="lg">
                    <a href={item.url}>
                      <item.icon className="w-10 h-10 shrink-0 text-3xl!"/>
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <AccessStatus />
      </SidebarFooter>
    </Sidebar>
  )
}