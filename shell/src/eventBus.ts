class EventBus extends EventTarget {
  dispatch(event: string, data: any) {
    this.dispatchEvent(new CustomEvent(event, { detail: data }));
  }
  subscribe(event: string, callback: (data: any) => void) {
    this.addEventListener(event, (e: Event) =>
      callback((e as CustomEvent).detail),
    );
  }
  unsubscribe(event: string, callback: (data: any) => void) {
    this.removeEventListener(event, callback);
  }
}
const eventBus = new EventBus();
export default eventBus;
