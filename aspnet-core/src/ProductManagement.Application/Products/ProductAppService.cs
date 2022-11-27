using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace ProductManagement.Products
{

	public class ProductAppService : CrudAppService<Product, ProductDto, Guid, PagedAndSortedResultRequestDto, CreateUpdateProductDto>, IProductAppService
	{
		private readonly IRepository<Product, Guid> _productRepository;
		public ProductAppService(IRepository<Product, Guid> repository) : base(repository)
		{
			_productRepository = repository;
		}

		public async Task<PagedResultDto<ProductDto>> getByCondition(PagedAndSortedResultRequestDto input)
		{
			var queryable = await _productRepository.WithDetailsAsync(x => x.Category);
			queryable = queryable
				.Skip(input.SkipCount)
				.Take(input.MaxResultCount)
				.OrderBy(x => input.Sorting ?? nameof(Product.Name));
			var products = await AsyncExecuter.ToListAsync(queryable);
			var count = await _productRepository.GetCountAsync();

			return new PagedResultDto<ProductDto>(
				count,
				ObjectMapper.Map<List<Product>, List<ProductDto>>(products)
				);
		}
	}
}