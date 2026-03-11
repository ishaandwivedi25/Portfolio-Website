import { AnimatedReveal } from '@/components/animated-reveal';
import { Section } from '@/components/section';
import { projects } from '@/data/site';

export default function ProjectsPage() {
  return (
    <div className="py-16 md:py-20">
      <Section eyebrow="Projects" title="Case studies in product strategy and analytics.">
        <div className="space-y-6">
          {projects.map((project, index) => (
            <AnimatedReveal key={project.slug} delay={index * 0.07}>
              <article className="rounded-sm border border-line bg-[#fcfbf8] p-7">
                <h2 className="font-serif text-3xl leading-tight">{project.title}</h2>
                <div className="mt-5 grid gap-4 text-sm leading-relaxed text-[#353430] md:grid-cols-2">
                  <div>
                    <h3 className="mb-1 text-xs uppercase tracking-[0.14em] text-muted">Context</h3>
                    <p>{project.context}</p>
                  </div>
                  <div>
                    <h3 className="mb-1 text-xs uppercase tracking-[0.14em] text-muted">Challenge</h3>
                    <p>{project.challenge}</p>
                  </div>
                  <div>
                    <h3 className="mb-1 text-xs uppercase tracking-[0.14em] text-muted">Approach</h3>
                    <p>{project.approach}</p>
                  </div>
                  <div>
                    <h3 className="mb-1 text-xs uppercase tracking-[0.14em] text-muted">My Contribution</h3>
                    <p>{project.contribution}</p>
                  </div>
                  <div>
                    <h3 className="mb-1 text-xs uppercase tracking-[0.14em] text-muted">Methods & Tools</h3>
                    <p>{project.methods}</p>
                  </div>
                  <div>
                    <h3 className="mb-1 text-xs uppercase tracking-[0.14em] text-muted">Outcome</h3>
                    <p>{project.outcome}</p>
                  </div>
                </div>
              </article>
            </AnimatedReveal>
          ))}
        </div>
      </Section>
    </div>
  );
}
