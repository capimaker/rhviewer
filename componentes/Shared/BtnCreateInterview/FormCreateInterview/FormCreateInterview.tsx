"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Input } from "@/components/ui/input"
import { formSchema } from "./FormCreateInterview.form"
import { Link, Mic } from "lucide-react"
import { difficulties, roles } from "./FormCreateInterview.data"
import axios from "axios"
 


export function FormCreateInterview() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
        rol: "",
        level: "",
    },
  })
 
 const onSubmit = async (values: z.infer<typeof formSchema>) => {
  setIsLoading(true)
  try{
    const response = await axios.post("/api/create-interview", values)
    router.push(`/interview${response.data.id}`)
  } catch (error){
    console.log(error)

  }finally{
    setIsLoading(false)
   }
  };
    return (   
         <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 text-black">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Interview Name" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
            control={form.control}
            name="rol"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Select your Role</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Choose your role" />
                    </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                        {roles.map((role) => (
                            <SelectItem key={role.label} value={role.value}>
                                <div className="flex items-center gap-2">
                                    <span>{role.label}</span>

                                </div>
                            </SelectItem>
                        ))}
                        </SelectContent>
                </Select>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="level"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Select your level</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Choose your level" />
                    </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                        {difficulties.map((level) => (
                            <SelectItem key={level.label} value={level.value}>
                                <div className="flex items-center gap-2">
                                    {level.label}

                                </div>
                            </SelectItem>
                        ))}
                        </SelectContent>
                </Select>
                <FormMessage />
                </FormItem>
            )}
            />
           
        <Button type="submit" className="w-full bg-linear-to-r from-blue-600 to-purple-600 font-bold py-3 px rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300" disabled={isLoading}>
            Start Interview
            <Mic/>
        </Button>
      </form>
    </Form>
    );
}

