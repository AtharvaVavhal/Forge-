"use client";

import Link from "next/link";
import { useState } from "react";
import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";
import HoverArrow from "@/components/HoverArrow";
import { services, type Service } from "@/lib/content/services";

const capabilityServices = services.filter(
  (service) => service.slug !== "maintenance-support"
);

function CapabilityStage({ service, index }: { service: Service; index: number }) {
  const shared = (
    <>
      <div className="capability-stage__grid" />
      <div className="capability-stage__coordinates mono">
        <span>X / 24.16</span><span>Y / 07.32</span>
      </div>
      <p className="capability-stage__caption mono">
        CAPABILITY STUDY / {String(index + 1).padStart(2, "0")}—05
      </p>
    </>
  );

  if (service.slug === "websites") return <div className="capability-stage capability-stage--website" aria-hidden="true">
    {shared}
    <div className="capability-browser"><div className="capability-browser__bar"><span className="capability-dots"><i /><i /><i /></span><span>PROJECT / WEBSITE</span><span className="capability-browser__live">BUILD</span></div><div className="capability-browser__page"><nav><strong>North / Form</strong><span>Work&nbsp;&nbsp; Method&nbsp;&nbsp; Contact</span></nav><div className="capability-website-hero"><div><small>DESIGNED TO BE USEFUL</small><strong>Give the business a better front door.</strong><b>Start an enquiry →</b></div><span className="capability-website-image"><i /><i /><i /></span></div><div className="capability-website-blocks"><i /><i /><i /></div></div></div>
    <div className="capability-stage__tags"><span>RESPONSIVE</span><span>CONTENT SYSTEM</span><span>SEO READY</span></div>
  </div>;

  if (service.slug === "web-applications") return <div className="capability-stage capability-stage--application" aria-hidden="true">
    {shared}
    <div className="capability-app"><aside><strong>F</strong><i /><i /><i /><i /></aside><div className="capability-app__workspace"><header><div><small>WORKSPACE / ACTIVE</small><strong>Operations queue</strong></div><span>+ Add task</span></header><div className="capability-app__filters"><span>All work</span><span>Owner</span><span>In progress</span></div><div className="capability-app__content"><div className="capability-app__list"><p><i />Review scope <small>OPEN</small></p><p><i />Prepare handover <small>REVIEW</small></p><p><i />Send update <small>READY</small></p></div><div className="capability-app__activity"><small>ACTIVITY</small><i /><i /><i /><i /><i /></div></div></div></div>
    <div className="capability-stage__tags"><span>WORKFLOWS</span><span>ROLES</span><span>LIVE STATUS</span></div>
  </div>;

  if (service.slug === "e-commerce") return <div className="capability-stage capability-stage--commerce" aria-hidden="true">
    {shared}
    <div className="capability-store"><header><strong>OBJECT / FORM</strong><span>Shop&nbsp;&nbsp; Collections&nbsp;&nbsp; Cart (02)</span></header><div className="capability-store__body"><div className="capability-store__product"><div className="capability-product-shape"><i /><i /></div><small>STUDIO OBJECT 01</small><strong>Utility vessel</strong><span>₹1,200</span></div><div className="capability-store__order"><small>SELECT VARIANT</small><div><i /> Natural <i /> Ink</div><p><span>Order summary</span><b>₹1,200</b></p><span className="capability-stage__action">Add to cart</span></div></div></div>
    <div className="capability-stage__tags"><span>CATALOG</span><span>PAYMENTS</span><span>ORDER FLOW</span></div>
  </div>;

  if (service.slug === "business-automation") return <div className="capability-stage capability-stage--automation" aria-hidden="true">
    {shared}
    <div className="capability-flow"><div className="capability-flow__heading"><small>PROCESS / AUTOMATED</small><strong>From enquiry to next action.</strong></div><div className="capability-flow__path"><span className="capability-flow__signal" /><i /><b>01<br />TRIGGER<small>New enquiry</small></b><em /><i /><b>02<br />RULE<small>Qualify lead</small></b><em /><i /><b>03<br />ACTION<small>Assign follow-up</small></b><em /><i /><b>04<br />NOTIFY<small>Notify team</small></b></div></div>
    <div className="capability-stage__tags"><span>TRIGGER</span><span>RULES</span><span>NOTIFICATIONS</span></div>
  </div>;

  return <div className="capability-stage capability-stage--mobile" aria-hidden="true">
    {shared}
    <div className="capability-phone"><div className="capability-phone__speaker" /><header><small>FIELD VIEW</small><span>•••</span></header><div className="capability-phone__body"><small>YOUR DAY</small><strong>Everything useful, close at hand.</strong><div><i /><i /><i /></div><span className="capability-stage__action">Check in</span></div><nav><i /><i /><i /><i /></nav></div>
    <div className="capability-mobile-note"><small>SYNCED</small><strong>Ready offline</strong><span>●</span></div>
    <div className="capability-stage__tags"><span>MOBILE FIRST</span><span>FIELD WORK</span><span>NOTIFICATIONS</span></div>
  </div>;
}

export default function ServicesGrid() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = capabilityServices[activeIndex];

  function selectService(index: number) {
    setActiveIndex(index);
  }

  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal variant="subtle">
          <Eyebrow number="04">What we build</Eyebrow>
          <div className="mt-3 grid gap-5 md:grid-cols-[1fr_auto] md:items-end">
            <h2 className="max-w-xl font-display text-3xl font-bold leading-[1.08] text-ink md:text-5xl">Systems built around how your business actually works.</h2>
            <p className="max-w-xs text-sm leading-relaxed text-ink/70 md:text-right">Five ways we turn a useful idea, process, or service into digital work people can use.</p>
          </div>
        </Reveal>

        <Reveal delay={80} className="services-showcase">
          <div className="services-showcase__rail">
            <div className="services-showcase__rail-head mono"><span>CAPABILITIES</span><span>01—05</span></div>
            {capabilityServices.map((service, index) => {
              const active = activeIndex === index;
              return <div key={service.slug} className="services-showcase__item">
                <button type="button" aria-pressed={active} onClick={() => selectService(index)} onFocus={() => selectService(index)} onPointerEnter={() => {
                  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) selectService(index);
                }} className={`services-showcase__control ${active ? "is-active" : ""}`}>
                  <span className="mono">{String(index + 1).padStart(2, "0")}</span><span className="services-showcase__name">{service.name}</span><span className="services-showcase__arrow" aria-hidden>↗</span>
                </button>
                <p className={`services-showcase__detail ${active ? "is-active" : ""}`}>{service.homeWhat}</p>
                {active && <div className="services-showcase__mobile-stage"><CapabilityStage service={service} index={index} /></div>}
              </div>;
            })}
            <Link href="/services" className="services-showcase__all font-display group">See full service detail <HoverArrow /></Link>
          </div>
          <div className="services-showcase__desktop-stage"><CapabilityStage key={activeService.slug} service={activeService} index={activeIndex} /></div>
        </Reveal>
      </div>
    </section>
  );
}
