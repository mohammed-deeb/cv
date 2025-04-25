import { supabase } from "@/lib/supabase";
import ProjectClient from '@/app/projects/ProjectClient';

// This is a server component (no 'use client' directive)
export async function generateStaticParams() {
    const { data } = await supabase.from('projectsinfo').select('id')
  
    return data?.map(({ id }) => ({
        id: id.toString(),
    }))
}

// Make the component async
export default async function ProjectPage({ params }: { params: { id: string } }) {
    // Await the params
    const projectId = await Promise.resolve(params.id);
    
    return <ProjectClient projectId={projectId} />;
  }