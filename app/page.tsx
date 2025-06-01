"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Code,
  Keyboard,
  Edit,
  Search,
  BookOpen,
  Target,
  Terminal,
} from "lucide-react";
import { PhilosophyTab } from "@/components/PhilosophyTab";
import { ModesTab } from "@/components/ModesTab";
import { BasicTab } from "@/components/BasicTab";
import { AdvancedTab } from "@/components/AdvancedTab";
import { AdvancedFeaturesTab } from "@/components/AdvancedFeaturesTab";
import { SearchTab } from "@/components/SearchTab";
import { ConfigTab } from "@/components/ConfigTab";
import { LearningPathTab } from "@/components/LearningPathTab";
import { SimulatorTab } from "@/components/SimulatorTab";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mt-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
            VIM Cheat Sheet
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            คู่มือ VIM ฉบับสมบูรณ์ครอบคลุมทุกคำสั่งที่จำเป็น
            พร้อมเทคนิคขั้นสูงและแนวทางการเรียนรู้
          </p>
        </div>

        <div className="mt-12">
          <Tabs defaultValue="philosophy" className="w-full max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-9 mb-8 text-xs">
              <TabsTrigger
                value="philosophy"
                className="flex items-center gap-1"
              >
                <BookOpen className="h-3 w-3" />
                ปรัชญา
              </TabsTrigger>
              <TabsTrigger value="modes" className="flex items-center gap-1">
                <Target className="h-3 w-3" />
                โหมด
              </TabsTrigger>
              <TabsTrigger value="basic" className="flex items-center gap-1">
                <Keyboard className="h-3 w-3" />
                พื้นฐาน
              </TabsTrigger>
              <TabsTrigger value="advanced" className="flex items-center gap-1">
                <Edit className="h-3 w-3" />
                ขั้นสูง
              </TabsTrigger>
              <TabsTrigger
                value="advanced-features"
                className="flex items-center gap-1"
              >
                <Target className="h-3 w-3" />
                เทคนิคขั้นสูง
              </TabsTrigger>
              <TabsTrigger value="search" className="flex items-center gap-1">
                <Search className="h-3 w-3" />
                ค้นหา
              </TabsTrigger>
              <TabsTrigger value="config" className="flex items-center gap-1">
                <Code className="h-3 w-3" />
                การตั้งค่า
              </TabsTrigger>
              <TabsTrigger value="path" className="flex items-center gap-1">
                <Target className="h-3 w-3" />
                เส้นทาง
              </TabsTrigger>
              <TabsTrigger
                value="simulator"
                className="flex items-center gap-1"
              >
                <Terminal className="h-3 w-3" />
                จำลอง
              </TabsTrigger>
            </TabsList>

            <TabsContent value="philosophy">
              <PhilosophyTab />
            </TabsContent>

            <TabsContent value="modes">
              <ModesTab />
            </TabsContent>

            <TabsContent value="basic">
              <BasicTab />
            </TabsContent>

            <TabsContent value="advanced">
              <AdvancedTab />
            </TabsContent>

            <TabsContent value="advanced-features">
              <AdvancedFeaturesTab />
            </TabsContent>

            <TabsContent value="search">
              <SearchTab />
            </TabsContent>

            <TabsContent value="config">
              <ConfigTab />
            </TabsContent>

            <TabsContent value="path">
              <LearningPathTab />
            </TabsContent>

            <TabsContent value="simulator">
              <SimulatorTab />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
