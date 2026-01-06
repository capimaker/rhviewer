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
import { Logo } from "@/componentes/Shared"
import { BtnCreateInterview } from "@/componentes/Shared/BtnCreateInterview"
import { AccessStatus } from "./AccessStatus"

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
  return (
    <Sidebar className="text-white">
      <SidebarHeader />
      <Logo />
      <SidebarContent>
        <SidebarGroup>
          <BtnCreateInterview />
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