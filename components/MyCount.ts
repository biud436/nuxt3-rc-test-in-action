export class MyCount {
    count: any = useState("count", () => 0);

    increment() {
        this.count++;
    }
}
