import { IControllerConstructor, IComponentOptions } from 'angular';
export interface ComponentOptionsDecorated extends IComponentOptions {
    selector: string;
    styles?: any[];
    restrict?: string;
    replace?: boolean;
}
export declare function Component({ selector, ...options }: ComponentOptionsDecorated): (ctrl: IControllerConstructor) => void;
