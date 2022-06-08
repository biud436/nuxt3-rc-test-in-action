import type { Ref } from "vue";

type MyCountState = Ref<number>["value"];

/**
 * @class MyCount
 * @description Reactivity 클래스 테스트
 */
export class MyCount {
    count: MyCountState = useState("count", () => 0).value;

    public increment() {
        this.count++;
    }

    public decrement() {
        if (this.count < 0) this.count = 0;
        this.count--;
    }
}
