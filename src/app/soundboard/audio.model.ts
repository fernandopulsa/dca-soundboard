export class AudioElement {
  constructor(
    public name: string,
    public url: string,
    public section: string,
    public voice: string,
    public take: string
  ) {
    this.name = name;
    this.url = url;
    this.section = section;
    this.voice = voice;
    this.take = take;
  }
}
