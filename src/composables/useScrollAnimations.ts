import { onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollAnimations() {
  const triggers: ScrollTrigger[] = []

  onMounted(() => {
    // ── Fade-up elements ──
    document.querySelectorAll('[data-animate="fade-up"]').forEach((el) => {
      gsap.set(el, { y: 50, opacity: 0 })
      triggers.push(
        ScrollTrigger.create({
          trigger: el,
          start: 'top 88%',
          onEnter: () => {
            gsap.to(el, { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' })
          },
          once: true,
        })
      )
    })

    // ── Slide-in from left ──
    document.querySelectorAll('[data-animate="slide-left"]').forEach((el) => {
      gsap.set(el, { x: -60, opacity: 0 })
      triggers.push(
        ScrollTrigger.create({
          trigger: el,
          start: 'top 88%',
          onEnter: () => {
            gsap.to(el, { x: 0, opacity: 1, duration: 0.9, ease: 'power3.out' })
          },
          once: true,
        })
      )
    })

    // ── Slide-in from right ──
    document.querySelectorAll('[data-animate="slide-right"]').forEach((el) => {
      gsap.set(el, { x: 60, opacity: 0 })
      triggers.push(
        ScrollTrigger.create({
          trigger: el,
          start: 'top 88%',
          onEnter: () => {
            gsap.to(el, { x: 0, opacity: 1, duration: 0.9, ease: 'power3.out' })
          },
          once: true,
        })
      )
    })

    // ── Stagger groups ──
    document.querySelectorAll('[data-animate-stagger]').forEach((group) => {
      const children = group.children
      gsap.set(children, { y: 50, opacity: 0 })
      triggers.push(
        ScrollTrigger.create({
          trigger: group,
          start: 'top 88%',
          onEnter: () => {
            gsap.to(children, {
              y: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.1,
              ease: 'power3.out',
            })
          },
          once: true,
        })
      )
    })

    // ── Scale-in elements ──
    document.querySelectorAll('[data-animate="scale-in"]').forEach((el) => {
      gsap.set(el, { scale: 0.85, opacity: 0 })
      triggers.push(
        ScrollTrigger.create({
          trigger: el,
          start: 'top 88%',
          onEnter: () => {
            gsap.to(el, { scale: 1, opacity: 1, duration: 1, ease: 'back.out(1.4)' })
          },
          once: true,
        })
      )
    })

    // ── Counter animation ──
    document.querySelectorAll('[data-counter]').forEach((el) => {
      const target = parseFloat(el.getAttribute('data-counter') || '0')
      const suffix = el.getAttribute('data-counter-suffix') || ''
      triggers.push(
        ScrollTrigger.create({
          trigger: el,
          start: 'top 90%',
          onEnter: () => {
            const obj = { val: 0 }
            gsap.to(obj, {
              val: target,
              duration: 2,
              ease: 'power2.out',
              onUpdate: () => {
                const display = target % 1 === 0 ? Math.round(obj.val) : obj.val.toFixed(1)
                ;(el as HTMLElement).textContent = display + suffix
              },
            })
          },
          once: true,
        })
      )
    })

    // ── Parallax sections ──
    document.querySelectorAll('[data-parallax]').forEach((el) => {
      const speed = parseFloat(el.getAttribute('data-parallax') || '0.2')
      triggers.push(
        ScrollTrigger.create({
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
          onUpdate: (self) => {
            gsap.set(el, { y: self.progress * 100 * speed - 50 * speed })
          },
        })
      )
    })

    // ── Horizontal line grow ──
    document.querySelectorAll('[data-animate="line-grow"]').forEach((el) => {
      gsap.set(el, { scaleX: 0, transformOrigin: 'left center' })
      triggers.push(
        ScrollTrigger.create({
          trigger: el,
          start: 'top 90%',
          onEnter: () => {
            gsap.to(el, { scaleX: 1, duration: 1.2, ease: 'power3.inOut' })
          },
          once: true,
        })
      )
    })
  })

  onUnmounted(() => {
    triggers.forEach((st) => st.kill())
  })
}
