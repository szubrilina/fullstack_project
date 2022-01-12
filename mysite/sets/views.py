from django.shortcuts import render
from .serializers import WordSerializer, SetSerializer, WordSetSerializer
from rest_framework.views import APIView
from rest_framework import generics
from .models import Set, Word, WordSet
from rest_framework.response import Response

class GetSet(APIView):
    def get(self, request, set_id):
        my_set = Set.objects.get(set_id = set_id)
        serializer = SetSerializer(my_set)
        queryset = WordSet.objects.filter(set_id = set_id)
        d = dict(serializer.data)
        wordSetSer = WordSetSerializer(queryset, many = True)
        words_ids = [obj['word_id'] for obj in wordSetSer.data]
        words = Word.objects.filter(word_id__in = words_ids)
        d.update({'words': WordSerializer(words, many = True).data})
        return Response(d)

class CreateSet(APIView):
    def post(self, request):
        words = request.data['words']
        name = request.data['name']
        description = request.data['description']
        set_id = Set.objects.create(
            name = name, 
            description = description
        ).set_id
        for word in words:
            word_id = Word.objects.create(
                part1 = word['part1'],
                part2 = word['part2']
            ).word_id
            WordSet.objects.create(
                word_id = word_id,
                set_id = set_id,
            )
        return Response('set created!')

class DeleteSet(generics.DestroyAPIView):
    serializer_class = SetSerializer
    queryset = Set.objects.all()

class SetsList(APIView):
    def get(self, request):
        queryset = Set.objects.all()
        serializer = SetSerializer(queryset, many=True)
        return Response(serializer.data)