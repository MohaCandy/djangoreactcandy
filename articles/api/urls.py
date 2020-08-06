from articles.api.views import ArticleViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('', ArticleViewSet, basename='articles')
urlpatterns = router.urls

# from django.urls import path

# from .views import ArticleListView, ArticleDetailView, ArticleCreateView

# urlpatterns = [
#     path('', ArticleListView.as_view()),
#     path('<pk>', ArticleDetailView.as_view()),
#     path('post/', ArticleCreateView.as_view())
# ]
