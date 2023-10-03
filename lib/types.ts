export type ElementsObject = {
    componentWrapper:HTMLDivElement,
    titleWrapper:HTMLDivElement,
    descWrapper:HTMLDivElement,
    icon:{
        infoSymbol:SVGGElement,
        errorSymbol:SVGGElement,
        successSymbol:SVGGElement,
        warningSymbol:SVGGElement,
    }
};

export type NotificationType = "SUCCESS" | "ERROR" | "WARNING" | "INFO";

export type SwipeGestureData = {
    startX:number | null,
    startTime:number | null,
    endTime:number | null,
    distance:number | null,
}