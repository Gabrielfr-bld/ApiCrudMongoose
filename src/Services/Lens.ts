import Lens, { LensSchema } from '../Interfaces/Lens';
import Service, { ServiceError } from '.';
import LensModel from '../Models/Lens';

class LensService extends Service<Lens> {
  constructor(model = new LensModel()) {
    super(model);
  }

  create =async (obj: Lens): Promise<Lens | ServiceError | null> => {
    const parsed = LensSchema.safeParse(obj);
    if (!parsed.success) {
      return { error: parsed.error };
    }
    return this.model.create(obj);
  };
}

export default LensService;