import { Test, TestingModule } from "@nestjs/testing";
import { ProductsLibraryService } from "./products-library.service";

describe("ProductsLibraryService", () => {
  let service: ProductsLibraryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsLibraryService],
    }).compile();

    service = module.get<ProductsLibraryService>(ProductsLibraryService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
