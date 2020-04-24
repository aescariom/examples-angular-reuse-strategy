import {ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy} from '@angular/router';

export class CustomReuseStrategy implements RouteReuseStrategy {

  handlers: {[key: string]: DetachedRouteHandle} = {};

  /**
   * Executed each time the route value changes. It determnes if the route will be reused.
   * If TRUE is returned, any other method will be returned
   */
  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    console.log('shouldReuseRoute')
    // if the new url and the old one is the same, we reuse, we do not save
    return future.routeConfig === curr.routeConfig;
  }

  /**
  * If TRUE is returned the component will be stored calling store()
  */
  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    console.log('shouldDetach', route.routeConfig.path)
    // if we are under a component we want to store the value we go to store the value
    return route.routeConfig.path.endsWith('filter-save');
  }

  /**
  * Saves the instances we want to reuse in a near future
  */
  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    console.log('store')
    const path = this.replaceUrlParams(route.routeConfig.path, route.params);
    // we store the component
    this.handlers[path] = handle;
  }

  /**
  * if TRUE is returned, the retireve method will be called
  */
  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    console.log('shouldAttach')
    const path = this.replaceUrlParams(route.routeConfig.path, route.params);
    // let's check if we have a stored verision
    return !!this.handlers[path];
  }

  /**
  *  retrieves the stored entity
  */
  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
    console.log('retrieve')
    // let's return the stored version
    const path = this.replaceUrlParams(route.routeConfig.path, route.params);
    return this.handlers[path];
  }

  private replaceUrlParams(path: string, params: any = {}) {
    console.log('replaceUrlParams')
    const keys = Object.keys(params);

    // we replace each key contained on the path with its value
    for(let key of keys){
      path = path.replace(new RegExp(`:${key}`), params[key]);
    }

    return path;
  }
}