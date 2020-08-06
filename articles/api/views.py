from articles.models import Article
from .serializers import ArticleSerializer
from rest_framework.permissions import AllowAny
from rest_framework import viewsets


class ArticleViewSet(viewsets.ModelViewSet):
    serializer_class = ArticleSerializer
    queryset = Article.objects.all()
    permission_classes = [AllowAny]


# from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView

# from articles.models import Article
# from .serializers import ArticleSerializer


# # we need to query all the object data and then serialized them to
# # the right resrializer to be transformed as JSON formate.
# class ArticleListView(ListAPIView):
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer


# class ArticleDetailView(RetrieveAPIView):
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer


# class ArticleCreateView(CreateAPIView):
#     # queryset = Article.objects.all()

#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer
