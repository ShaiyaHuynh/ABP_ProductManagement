using System;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace ProductManagement.Products
{
    public interface IProductAppService : ICrudAppService< //Defines CRUD methods
            ProductDto, //Used to show books
            Guid, //Primary key of the book entity
            PagedAndSortedResultRequestDto, //Used for paging/sorting
            CreateUpdateProductDto>, IApplicationService
    {
        Task<PagedResultDto<ProductDto>> getByCondition(PagedAndSortedResultRequestDto input);
    }
}
