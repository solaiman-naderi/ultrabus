export const ultrabus = () => {
  const events = new Map();

  return {
    on(event, fn) {
      if (!events.has(event)) events.set(event, []);
      events.get(event).push(fn);
    },

    off(event, fn) {
      const fns = events.get(event);
      if (fns)
        events.set(
          event,
          fns.filter((cb) => cb !== fn)
        );
    },

    emit(event, ...args) {
      const fns = events.get(event);
      if (fns) fns.slice().forEach((fn) => fn(...args));
    },

    clear(event) {
      event ? events.delete(event) : events.clear();
    },
  };
};
