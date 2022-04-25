type TTypeormModule = typeof import('typeorm');

let TypeormModule: TTypeormModule;

export function setModule(module: TTypeormModule) {
  TypeormModule = module;
};

export {TypeormModule};
