import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useProjects } from '../../hooks/useProjects';
import ProjectCard, { ProjectCardSkeleton } from '../ProjectCard';
import SectionHeading from '../ui/SectionHeading';

const FeaturedProjects = ({ limit = 2 }) => {
  const { projects, loading } = useProjects();

  return (
    <section className="container-page py-24 md:py-32">
      <SectionHeading
        eyebrow="Selected work"
        title="Recent projects"
        description="A few products I've designed and built end to end."
        action={
          <Link to="/projects" className="btn btn-ghost group">
            All projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        }
      />
      <div className="grid gap-6 md:grid-cols-2">
        {loading
          ? Array.from({ length: limit }, (_, i) => <ProjectCardSkeleton key={i} />)
          : projects.slice(0, limit).map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
      </div>
    </section>
  );
};

export default FeaturedProjects;
